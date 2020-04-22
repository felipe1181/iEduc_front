import React from 'react';


import { Card ,Row,Col, List,Button,Progress} from 'antd';

import './exams.css';

const data={"results":[{"exam":"Matemática","progress":"85.5"},{"exam":"Ciências","progress":"45"},{"exam":"Português","progress":"15.8"}]};
function Exams(props){
    return(
        <>
        <Card className="card-exams">
            <span>Exames em progresso</span>
            <p>Seu progresso</p>
            <List
                dataSource={data.results}
                renderItem={item => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                    title={item.exam} 
                    />
                    <div> 
                        <Progress
                        width={35}
                            type="circle"
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={item.progress}
                            />
                    </div>
                </List.Item>
                )}
            >     
            </List>
            <Button className="" type="primary" block>Ver todos</Button>
        </Card>
    </>    
    );
}

export default Exams;