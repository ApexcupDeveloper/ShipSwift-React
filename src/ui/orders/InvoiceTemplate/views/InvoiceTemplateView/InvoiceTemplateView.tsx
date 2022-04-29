import { useLocale } from '../../../../../assets/locale';
import { QrCodeIcon60 } from '../../../../../assets/icons';
import { ShipSwiftImage } from '../../../../../assets/images';
import * as styled from './InvoiceTemplateView.styled';
import { ItemRaw, TitleRaw } from '../../../../@core/modules/ListBuilder';
import { Devider } from '../../../../@core/modules/Devider';

type Props = {};

export const InvoiceTemplateView: React.FC<Props> = ({ children }) => {
	const { word } = useLocale();

	return (
		<styled.BodyWrapper>
			<styled.Header>
				<styled.Logo src={ShipSwiftImage} alt="" />
				<QrCodeIcon60 />
			</styled.Header>
			<styled.Section>
				<styled.SectionTitle>{word('invoiceTemplate.shipping.address')}</styled.SectionTitle>
				<styled.SectionContent>
					<div>
						17 Eling Crescent, Hook, RG27 0FJ <br />
						United Kingdom
					</div>
					<styled.List>
						<styled.Row>
							<span>{word('invoiceTemplate.order.date')}</span>
							<span>03-07-2021</span>
						</styled.Row>
						<styled.Row>
							<span>{word('invoiceTemplate.invoice.number')}</span>
							<span>#101010</span>
						</styled.Row>
						<styled.Row>
							<span>{word('invoiceTemplate.shipping.method')}</span>
							<span>Defaulymethod</span>
						</styled.Row>
						<styled.Row>
							<span>{word('invoiceTemplate.email')}</span>
							<span>emailcustomer@gmail.com</span>
						</styled.Row>
						<styled.Row>
							<span>{word('invoiceTemplate.phone')}</span>
							<span>+447441425769</span>
						</styled.Row>
					</styled.List>
				</styled.SectionContent>
			</styled.Section>
			<styled.Section>
				<styled.SectionTitle>{`${word('invoiceTemplate.invoice')}: # 101010`}</styled.SectionTitle>
				<div>
					<TitleRaw cleanBackground splitter flat minWidth={50} height={50}>
						<TitleRaw.Item flex={0}>
							{word('global.qty').replace(/\W/, '').toLocaleUpperCase()}
						</TitleRaw.Item>
						<TitleRaw.Item flex={2} align="left">
							{word('global.item')}
						</TitleRaw.Item>
						<TitleRaw.Item align="left">{word('global.sku')}</TitleRaw.Item>
						<TitleRaw.Item align="left">{word('global.price')}</TitleRaw.Item>
						<TitleRaw.Item flex={0} align="right">
							{word('order.total')}
						</TitleRaw.Item>
					</TitleRaw>
					<ItemRaw flat minWidth={50} minHeight={50}>
						<ItemRaw.Title flex={0}>1</ItemRaw.Title>
						<ItemRaw.Title flex={4} align="left">
							Credit, Telephone sipdate.co.uk
						</ItemRaw.Title>
						<ItemRaw.Title flex={2} align="left">
							124124133
						</ItemRaw.Title>
						<ItemRaw.Title flex={2} align="left">
							£1370.00
						</ItemRaw.Title>
						<ItemRaw.Title flex={1} align="right">
							£1370.00
						</ItemRaw.Title>
					</ItemRaw>
					<styled.SectionContent>
						<div />
						<div>
							<ItemRaw flat minWidth={50} minHeight={50}>
								<ItemRaw.Title align="left">Subtotal net</ItemRaw.Title>
								<ItemRaw.Title align="right">£8.33</ItemRaw.Title>
							</ItemRaw>
							<ItemRaw flat minWidth={50} minHeight={50}>
								<ItemRaw.Title align="left">20% vat</ItemRaw.Title>
								<ItemRaw.Title align="right">£1.67</ItemRaw.Title>
							</ItemRaw>
							<ItemRaw flat minWidth={50} minHeight={50}>
								<ItemRaw.Title align="left">
									<span>{word('invoiceTemplate.invoice.gross')}</span>
								</ItemRaw.Title>
								<ItemRaw.Title align="right">
									<span>£1380.00</span>
								</ItemRaw.Title>
							</ItemRaw>
							<div style={{ marginTop: 2 }}>
								<Devider />
							</div>
						</div>
					</styled.SectionContent>
				</div>
			</styled.Section>
			<styled.Space />
			<styled.Footer>
				<strong>ShipSwift.</strong> GmbH, 17 Eling Crescent, Hook, RG27 0FJ, United Kingdom. CEO: Long Name 1,
				Long Name 2 VAT ID: UK12094321, Tax number: 100/111/222, Support: supportshipswift.co.uk
			</styled.Footer>
		</styled.BodyWrapper>
	);
};
