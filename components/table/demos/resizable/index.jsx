import React from 'react';
import Table from 'kpc-react/components/table';
import {Form, FormItem} from 'kpc-react/components/form';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "a": "A",
                    "b": "B",
                    "c": "C"
                },
                {
                    "a": "A",
                    "b": "B",
                    "c": "C"
                }
            ]
        };
    }

    render() {
        const {data} = this.state;
    
        return (
            <div className='no-data-template'>
                <Table 
                    scheme={{
                        a: {
                            title: '通过minColWidth控制最小宽度100px',
                            width: '50%'
                        },
                        b: {
                            title: '单独设置最小宽度300px',
                            minWidth: 300,
                            width: '10%'
                        },
                        c: {
                            title: '标题',
                            width: '40%'
                        }
                    }} 
                    data={data}
                    resizable
                    minColWidth={100}
                    type="grid"
                    storeWidth="resizableTable"
                />
                <Form style={{"marginTop":"20px"}} labelWidth="140">
                    <FormItem style={{"width":"100%"}}
                        b-label={<React.Fragment>table in table-cell</React.Fragment>}
                    >
                        <Table 
                            fixHeader
                            scheme={{
                                a: {
                                    title: '通过minColWidth控制最小宽度100px',
                                    width: '50%'
                                },
                                b: {
                                    title: '单独设置最小宽度300px',
                                    minWidth: 300,
                                    width: '10%'
                                },
                                c: {
                                    title: '标题',
                                    width: '40%'
                                }
                            }} 
                            data={data}
                            resizable
                            minColWidth={100}
                        />
                    </FormItem>
                </Form>
            </div>
        )
    }
}