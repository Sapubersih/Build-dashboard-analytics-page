type Props = {
  title: string;
  value: number | string;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#f5f5f5",
        minWidth: "150px",
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;
