import React, { useState, useEffect } from 'react';
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd';
import axios from '../../config/axios';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export default function TodoList() {
    
    return (
        <div>
            <left></left>
            <right></right>
        </div>
    );
}
