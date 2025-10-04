import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import {
  ShoppingCart,
  People,
  Inventory,
  AttachMoney,
} from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/analytics/dashboard`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  const statsCards = [
    {
      title: 'Total Revenue',
      value: `€${analytics?.totalRevenue?.toFixed(2) || '0.00'}`,
      icon: <AttachMoney sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Total Orders',
      value: analytics?.totalOrders || 0,
      icon: <ShoppingCart sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
    {
      title: 'Total Users',
      value: analytics?.totalUsers || 0,
      icon: <People sx={{ fontSize: 40, color: 'success.main' }} />,
    },
    {
      title: 'Total Products',
      value: analytics?.totalProducts || 0,
      icon: <Inventory sx={{ fontSize: 40, color: 'warning.main' }} />,
    },
  ];

  const monthlyRevenueData = {
    labels: analytics?.monthlyRevenue?.map(item =>
      `${item._id.year}-${String(item._id.month).padStart(2, '0')}`
    ) || [],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: analytics?.monthlyRevenue?.map(item => item.revenue) || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const orderStatusData = {
    labels: analytics?.orderStatusDistribution?.map(item => item._id) || [],
    datasets: [
      {
        label: 'Orders by Status',
        data: analytics?.orderStatusDistribution?.map(item => item.count) || [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="h4">
                      {card.value}
                    </Typography>
                  </Box>
                  {card.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Revenue
              </Typography>
              <Line data={monthlyRevenueData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Status Distribution
              </Typography>
              <Bar data={orderStatusData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Orders
              </Typography>
              <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                {analytics?.recentOrders?.map((order) => (
                  <Box key={order._id} sx={{ p: 1, borderBottom: '1px solid #eee' }}>
                    <Typography variant="body2">
                      Order #{order._id.slice(-8)} - {order.user?.name || 'Unknown'} - €{order.totalAmount}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                )) || <Typography>No recent orders</Typography>}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;