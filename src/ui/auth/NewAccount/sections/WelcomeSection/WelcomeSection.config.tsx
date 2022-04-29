import { WordFunc } from "../../../../../assets/locale";

import { WelcomeStepProps } from "../../components/WelcomeStep";
import { StoreIcon, ProductIcon, StatIcon } from "./WelcomeSection.icons";

export const getSteps = (word: WordFunc): WelcomeStepProps[] => [
  {
    icon: <StoreIcon/>,
    title: word('welcome.title.connect-your-store'),
    description: word('welcome.description.only-3-steps'),
    step: 1
  },
  {
    icon: <ProductIcon/>,
    title: word('welcome.title.we-import'),
    description: word('welcome.description.dont-worry'),
    step: 2
  },  {
    icon: <StatIcon/>,
    title: word('welcome.title.make-trial'),
    description: word('welcome.description.start-shipping'),
    step: 3
  },
]