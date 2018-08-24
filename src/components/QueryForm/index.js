import React, { Component } from 'react';
import { Form, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export class QueryForm extends Component {
    submit = (form) => {
        form.validateFields((err, values) => {
            if (!err) {
                this.props.onQuery({
                    ...values,
                    start: values.timeRange[0].format('YYYY-MM-DD+HH:mm:ss'),
                    end: values.timeRange[1].format('YYYY-MM-DD+HH:mm:ss'),
                });
            }
        });
    }

    componentDidMount() {
        this.submit(this.props.form);        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.submit(this.props.form);
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const symbolError = isFieldTouched('symbol') && getFieldError('symbol');
        const tfError = isFieldTouched('tf') && getFieldError('tf');
        const timeRangeError = isFieldTouched('timeRange') && getFieldError('timeRange');
        
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={symbolError ? 'error' : ''}
                    help={symbolError || ''}
                >
                    {getFieldDecorator('symbol', {
                        initialValue: 'ETH',
                        rules: [{ required: true, message: 'Please input symbol!' }],
                    })(
                        <Select className='dark-select'>
                            <Option value="ETH">ETH</Option>
                            <Option value="XRP">XRP</Option>
                            <Option value="BCH">BCH</Option>
                            <Option value="EOS">EOS</Option>
                            <Option value="XLM">XLM</Option>
                            <Option value="LTC">LTC</Option>
                            <Option value="XEM">XEM</Option>
                            <Option value="ETC">ETC</Option>
                            <Option value="XMR">XMR</Option>
                            <Option value="DASH">DASH</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    validateStatus={tfError ? 'error' : ''}
                    help={tfError || ''}
                >
                    {getFieldDecorator('tf', {
                        initialValue: '15m',
                        rules: [{ required: true, message: 'Please input tf!' }],
                    })(
                        <Select className='dark-select'>
                            <Option value="5m">5m</Option>
                            <Option value="15m">15m</Option>
                            <Option value="30m">30m</Option>
                            <Option value="2h">2h</Option>
                            <Option value="4h">4h</Option>
                            <Option value="1d">1d</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    validateStatus={timeRangeError ? 'error' : ''}
                    help={timeRangeError || ''}
                >
                    {getFieldDecorator('timeRange', {
                        initialValue: [moment().subtract(1, 'days').startOf('day'), moment()],
                        rules: [{ required: true, message: 'Please input time range!' }],
                    })(
                        <RangePicker
                            showTime={{ format: 'HH:mm:ss' }}
                            format="YYYY-MM-DD HH:mm:ss"
                            placeholder={['Start Time', 'End Time']}
                            className='dark-date-picker'
                        />
                    )}
                </FormItem>    
                <FormItem>
                    <Button
                        type="primary"
                        // ghost
                        style={{ color: 'white' }}
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >Submit</Button>
                </FormItem>    
            </Form>
        )
    }
}

export default Form.create()(QueryForm);