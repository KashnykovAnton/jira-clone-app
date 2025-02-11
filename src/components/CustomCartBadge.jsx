import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";

const CustomCartBadge = ({ invisible }) => {
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;
  return <CartBadge invisible={invisible} color="primary" variant="dot" />;
};

export default CustomCartBadge;
