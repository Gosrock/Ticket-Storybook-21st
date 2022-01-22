import './reset.css';

// when you export your 작업 , jsx 확장자를 꼭 붙여야합니다. 안그럼 rollup단계에서 못알아 먹어요!
import { Button } from './stories/Button/Button.jsx';
import { GoBackButton } from './stories/GoBackButton/GoBackButton.jsx';
import { Header } from './stories/Header/Header.jsx';
import { Page } from './stories/PageTest/Page.jsx';
import { GoFrontButton } from './stories/GoFrontButton/GoFrontButton.jsx';
import { TicketBody } from './stories/Layout/TicketElement/TicketBody/TicketBody.jsx';
import { TicketTop } from './stories/Layout/TicketElement/TicketTop/TicketTop.jsx';
import { TicketWrapContainer } from './stories/Layout/TicketWrapContainer/TicketWrapContainer.jsx';
import { TicketContainer } from './stories/Layout/TicketContainer/TicketContainer.jsx';
import { TicketBodyHeader } from './stories/Layout/TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketBottom } from './stories/Layout/TicketElement/TicketBottom/TicketBottom.jsx';
import { InfoLayout } from './stories/Layout/TicketLayout/InfoLayout/InfoLayout.jsx';
import { ProgressLayout } from './stories/Layout/TicketLayout/ProgressLayout/ProgressLayout.jsx';
import { TicketLayout } from './stories/Layout/TicketLayout/TicketLayout/TicketLayout.jsx';

export {
  Button,
  Header,
  Page,
  GoBackButton,
  GoFrontButton,
  TicketBody,
  TicketTop,
  TicketWrapContainer,
  TicketContainer,
  TicketBodyHeader,
  TicketBottom,
  InfoLayout,
  ProgressLayout,
  TicketLayout
};
