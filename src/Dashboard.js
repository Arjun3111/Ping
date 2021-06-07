import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from './Widgets';


const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="app">
        <Sidebar/>
        <Feed />
        <Widgets/>
    </div>
  );
};

export default Dashboard;