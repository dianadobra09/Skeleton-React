import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface CustomTooltipProps {
  id: string;
}

const CustomTooltip = ({ id }: CustomTooltipProps) => {
  return <Tooltip id={id} />;
};

export { CustomTooltip };
