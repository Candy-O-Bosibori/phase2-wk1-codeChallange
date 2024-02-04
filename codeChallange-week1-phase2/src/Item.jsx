export default function Item({ date, description, category, amount }) {
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{category}</span>
      <span>{description}</span>
      <span>{category}</span>
      <span>{amount}</span>
    </li>
  );
}
