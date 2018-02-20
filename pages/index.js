import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';
import { demo } from '../store/actions/demo_action';

import Layout from '../components/Layout';
import {
	Form,
	Select,
	InputNumber,
	DatePicker,
	Switch,
	Slider,
	Button
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class HomePage extends React.Component {
  
  componentWillMount = () => {
    this.props.demo();
  }  

	render() {
		return (
			<Layout>
				<h2>ANT DESIGN</h2>
				<div style={{ marginTop: 100 }}>
					<Form layout="horizontal">
						<FormItem
							label="Input Number"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 8 }}
						>
							<InputNumber
								size="large"
								min={1}
								max={10}
								style={{ width: 100 }}
								defaultValue={3}
								name="inputNumber"
							/>
							<a href="#">Link</a>
						</FormItem>

						<FormItem
							label="Switch"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 8 }}
						>
							<Switch defaultChecked name="switch" />
						</FormItem>

						<FormItem
							label="Slider"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 8 }}
						>
							<Slider defaultValue={70} />
						</FormItem>

						<FormItem
							label="Select"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 8 }}
						>
							<Select
								size="large"
								defaultValue="lucy"
								style={{ width: 192 }}
								name="select"
							>
								<Option value="jack">jack</Option>
								<Option value="lucy">lucy</Option>
								<Option value="disabled" disabled>
									disabled
								</Option>
								<Option value="yiminghe">yiminghe</Option>
							</Select>
						</FormItem>

						<FormItem
							label="DatePicker"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 8 }}
						>
							<DatePicker name="startDate" />
						</FormItem>
						<FormItem
							style={{ marginTop: 48 }}
							wrapperCol={{ span: 8, offset: 8 }}
						>
							<Button size="large" type="primary" htmlType="submit">
								OK
							</Button>
							<Button size="large" style={{ marginLeft: 8 }}>
								Cancel
							</Button>
						</FormItem>
					</Form>
				</div>

				<h2>REDUX</h2>
				<p>From mapStateToProps: {this.props.reudxState.key1}</p>
        <p>From mapDispatchToProps: {this.props.reudxState.data}</p>
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		reudxState: state.demo
	};
};

const mapDispatchToProps = dispatch => {
	return {
		demo: () => dispatch(demo())
	};
};

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(
	HomePage
);