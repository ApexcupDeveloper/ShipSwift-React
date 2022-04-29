import { useLocale } from "../../../../../assets/locale";

import { MainButton } from "../../../../@core/modules/Button";
import { DisplayRound, SmallAlert } from "../../../../@core/modules/Other";

import * as styled from "./EmptyProductsPage.styled";

type Props = {};

export const EmptyProductsPage: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <DisplayRound>
      <styled.BodyWrapper>
				<styled.Title children={word('product.empty.no-products')} />
        <SmallAlert description={word('product.empty.connect-store-and-products')}/>
        <MainButton children={word('product.empty.connect-store')} />
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
