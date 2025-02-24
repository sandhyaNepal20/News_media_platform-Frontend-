import {
    BarChartOutlined,
    CommentOutlined,
    DashboardOutlined,
    FileTextOutlined,
    FolderAddOutlined,
    FolderOpenOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
import { useState } from "react";
import AddNewsForm from "../private/news/add_news";
import AddCategoryForm from "../private/news/add_news_category";
import ViewNews from "../private/news/view_news";
import ViewCategory from "../private/news/view_news_category";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("dashboard");

    const handleMenuClick = (e) => {
        setSelectedMenu(e.key);
    };

    const avatarMenu = (
        <Menu>
            <Menu.Item key="profile" icon={<UserOutlined />}>Profile</Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="p-4 text-center">
                    <img src="src/assets/logo.png" alt="Logo" className="w-32 h-auto mx-auto" />
                </div>
                <Menu theme="dark" mode="inline" onClick={handleMenuClick} selectedKeys={[selectedMenu]}>
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
                    <Menu.Item key="users" icon={<UserOutlined />}>Users</Menu.Item>
                    <Menu.Item key="addCategory" icon={<FolderAddOutlined />}>Add Category</Menu.Item>
                    <Menu.Item key="viewCategory" icon={<FolderOpenOutlined />}>View Category</Menu.Item>

                    <Menu.Item key="addNews" icon={<FileTextOutlined />}>Add News</Menu.Item>
                    <Menu.Item key="viewNews" icon={<FileTextOutlined />}>View News</Menu.Item>

                    <Menu.Item key="comments" icon={<CommentOutlined />}>Comments</Menu.Item>
                    <Menu.Item key="analytics" icon={<BarChartOutlined />}>Analytics</Menu.Item>
                </Menu>
            </Sider>

            {/* Main Layout */}
            <Layout>
                {/* Header */}
                <Header className="bg-white shadow flex justify-between items-center px-4">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                    <Dropdown overlay={avatarMenu} trigger={["click"]}>
                        <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2 cursor-pointer">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Avatar"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </Dropdown>
                </Header>

                {/* Main Content */}
                <Content className="p-6 bg-gray-100 min-h-screen">
                    {selectedMenu === "dashboard" && (
                        <div>
                            <h2 className="text-xl font-bold">Welcome to Admin Dashboard</h2>
                            <p className="mt-2 text-gray-600">Manage your platform efficiently.</p>
                        </div>
                    )}
                    {selectedMenu === "addCategory" && <AddCategoryForm />}
                    {selectedMenu === "addNews" && <AddNewsForm />}
                    {selectedMenu === "viewNews" && < ViewNews />}
                    {selectedMenu === "viewCategory" && < ViewCategory />}

                    {selectedMenu === "users" && <h2 className="text-lg font-bold">User Management</h2>}
                    {selectedMenu === "comments" && <h2 className="text-lg font-bold">Manage Comments</h2>}
                    {selectedMenu === "analytics" && <h2 className="text-lg font-bold">Analytics Overview</h2>}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;
