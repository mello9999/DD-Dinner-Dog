import React, { useState, useEffect } from 'react';
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd';
import axios from '../../config/axios';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState("");

    const fetchTodoList = async () => {
        const httpResponse = await axios.get("/todo-list");
        setTodoList(httpResponse.data);
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    const addTodoItem = async () => {
        await axios.post("/todo-list", { task: inputField });
        setInputField("");
        fetchTodoList();
    };

    const deleteTodoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`);
        fetchTodoList();
    };

    return (
        <Row justify="center" style={{ margin: "50px" }}>
            <Col>
                <Row justify="center">
                    <Link to="/profile"><Button>Profile</Button></Link>
                </Row>
                <Row>
                    <Text type="primary">กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: '100%' }} onClick={addTodoItem}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center">
                    <List
                        style={{ width: '450px' }}
                        header={<div>Todo List Page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo delete={deleteTodoItem} todo={todo} fetchData={fetchTodoList} />
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    );
}
