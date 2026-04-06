import { analyticsData } from "../data/mockData";
import StatCard from "../components/StatCard";
import AnalyticsChart from "../components/AnalyticsChart";

const Dashboard = () => {
  const totalUsers = analyticsData.reduce((acc, cur) => acc + cur.users, 0);
  const totalSales = analyticsData.reduce((acc, cur) => acc + cur.sales, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Analytics</h1>

      {/* Stats */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <StatCard title="Total Users" value={totalUsers} />
        <StatCard title="Total Sales" value={totalSales} />
      </div>

      {/* Chart */}
      <AnalyticsChart data={analyticsData} />
    </div>
  );
};

export default Dashboard;
