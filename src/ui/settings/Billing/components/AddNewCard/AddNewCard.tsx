import { useEffect, useState } from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { addErrorToast } from '../../../../toast';
import { config } from '../../../../../private';

type Props = {
	handleEventChange: () => void;
	submit: boolean;
	clientSecret: string;
	loadCompleted: () => void;
};

export const AddNewCard: React.FC<Props> = ({ handleEventChange, submit, loadCompleted }) => {
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		if (submit) {
			clickSubmit();
		}
	}, [submit])

	const clickSubmit = async () => {
		if (!stripe || !elements) {
			return;
		}

		handleEventChange();

		const { error } = await stripe.confirmSetup({
			elements,
			confirmParams: {
				return_url: `${config.hostname}/settings/billing/billing-settings`,
			}
		});
		if (error) {
			addErrorToast(error.message || 'Error while processing')
		} else {
		}
	}

	return (
		<form id="stripe-card">
			<PaymentElement onReady={loadCompleted} />
		</form>
	);
};
