import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BusinessLoginScreen from '../screens/BusinessLoginScreen';
import BusinessSignupScreen from '../screens/BusinessSignupScreen';
import BusinessHomeScreen from '../screens/BusinessHomeScreen';
import ManageSchedulesScreen from '../screens/ManageSchedulesScreen';
import ManageOrdersScreen from '../screens/ManageOrdersScreen';
import ManageProductsScreen from '../screens/ManageProductsScreen';
import ManageReviewsScreen from '../screens/ManageReviewsScreen';
import ViewStatsScreen from '../screens/ViewStatsScreen';
import PopularProductsScreen from '../screens/PopularProductsScreen';
import CustomerInsightsScreen from '../screens/CustomerInsightsScreen';
import TestScreen from '../screens/TestScreen';
import ProductsScreen from '../screens/ProductsScreen';


const BusinessStack = createStackNavigator();

const BusinessStackNavigator = () => {
  return (
    <BusinessStack.Navigator initialRouteName="BusinessLogin">
      <BusinessStack.Screen name="BusinessLogin" component={BusinessLoginScreen} />
      <BusinessStack.Screen name="BusinessSignup" component={BusinessSignupScreen} />
      <BusinessStack.Screen name="BusinessHome" component={BusinessHomeScreen} />
      <BusinessStack.Screen name="ManageSchedules" component={ManageSchedulesScreen} />
      <BusinessStack.Screen name="ManageOrders" component={ManageOrdersScreen} />
      <BusinessStack.Screen name="ManageProducts" component={ManageProductsScreen} />
      <BusinessStack.Screen name="ManageReviews" component={ManageReviewsScreen} />
      <BusinessStack.Screen name="ViewStats" component={ViewStatsScreen} />
      <BusinessStack.Screen name="PopularProducts" component={PopularProductsScreen} />
      <BusinessStack.Screen name="CustomerInsights" component={CustomerInsightsScreen} />
      <BusinessStack.Screen name="Test" component={TestScreen} />
      <BusinessStack.Screen name="Products" component={ProductsScreen} />
    </BusinessStack.Navigator>
  );
};

export default BusinessStackNavigator;
