import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddEventModal extends React.Component {
	formRef = React.createRef();
	state = {
		visible: false,
	};

	onFinish = (values) => {
		const url = "api/v1/events/";
		fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				if (data.ok) {
					this.handleCancel();

					return data.json();
				}
				throw new Error("Network error.");
			})
			.then(() => {
				this.props.reloadEvents();
			})
			.catch((err) => console.error("Error: " + err));
	};

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<>
				<Button type="primary" onClick={this.showModal}>
					Create New +
				</Button>

				<Modal
					title="Add New event ..."
					visible={this.state.visible}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
						<Form.Item
							name="name"
							label="name"
							rules={[
								{ required: true, message: "Please input your event's name!" },
							]}
						>
							<Input placeholder="Input your event's name" />
						</Form.Item>

						<Form.Item
							name="style"
							label="Style"
							rules={[
								{ required: true, message: "Please input your event's description!" },
							]}
						>
							<Input placeholder="Input your event's description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		);
	}
}

export default AddBeerModal;