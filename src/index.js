// Made by Singh

import React from 'react'
import {render} from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Modal, Button } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "Jujhar was here",
            visible: false
        };
    }

    // Bread crumb click
    dropNotification() {
        this.setState({
            content: "hello"
        });
    };

    // For button click
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    // For nav bar click
    handleClick = (e) => {
        if (e.key == 3) {
            this.setState({
                content: "Jujhar was over there"
            });
        }

        else {
            this.setState({
                content: "Jujhar was there"
            });

        }
    }

    render() {

        console.log(this.props.donkey);
        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 2</Menu.Item>
                        <Menu.Item key="4">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={this.dropNotification.bind(this)}>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: 'indigo', color: 'white', padding: 24, minHeight: 380 }}>
                        {this.state.content}<br />

                        <div>
                            <Button type="primary" onClick={this.showModal}>Open</Button>
                            <Modal
                                title="Basic Modal"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

render(
    <App donkey='what'/>, document.getElementById('app'))