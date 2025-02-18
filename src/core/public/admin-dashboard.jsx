import {
    BarChartOutlined,
    CommentOutlined,
    DashboardOutlined,
    FileTextOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, message } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick = (e) => {
        message.info(`Click on ${e.key}`);
    };

    const avatarMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="p-4 text-center">
                    {/* Add your logo here */}
                    <img
                        src="src/assets/logo.png" // Replace with your logo URL
                        alt="Logo"
                        className="w-32 h-auto mx-auto"
                    />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>Users</Menu.Item>
                    <Menu.Item key="3" icon={<FileTextOutlined />}>Add News</Menu.Item> {/* News Icon */}
                    <Menu.Item key="4" icon={<CommentOutlined />}>Comments</Menu.Item> {/* Comments Icon */}
                    <Menu.Item key="5" icon={<BarChartOutlined />}>Analytics</Menu.Item> {/* Analytics Icon */}
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white shadow flex justify-between items-center px-4">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                    <div className="flex items-center space-x-4">
                        <Dropdown overlay={avatarMenu} trigger={['click']}>
                            <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2 cursor-pointer">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Avatar"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <Content className="p-6 bg-gray-100 min-h-screen">
                    <h2 className="text-xl font-bold">Welcome to Admin Dashboard</h2>
                    <p className="mt-2 text-gray-600">Manage your platform efficiently.</p>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;
