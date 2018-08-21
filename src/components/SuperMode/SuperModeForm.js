import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './index.css';

const FormItem = Form.Item;

class SuperModeForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.runSuperMode();
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
            },
        };
        return (
            <div>
                <div className='guide-text'>Please input your requirements on the system performance</div>
                <br /><br />
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="Frame Rate">
                        {getFieldDecorator('frameRate', {
                            rules: [{ required: true, message: 'Please input desired frame rate!' }],
                        })( <Input /> )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Power Consumption">
                        {getFieldDecorator('powerConsumption', {
                            rules: [{ required: true, message: 'Please input desired power consumption!' }],
                        })( <Input /> )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Latency">
                        {getFieldDecorator('latency', {
                            rules: [{ required: true, message: 'Please input desired latency!' }],
                        })( <Input /> )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" icon='caret-right'>Run</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(SuperModeForm);