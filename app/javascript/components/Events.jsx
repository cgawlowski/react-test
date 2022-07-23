import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddEventModal from "./AddEventModal";

class Events extends React.Component {
	columns = [
		{
			title: "Brand",
			dataIndex: "brand",
			key: "brand",
		},
		{
			title: "Style",
			dataIndex: "style",
			key: "style",
		},
		{
			title: "Country",
			dataIndex: "country",
			key: "country",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this Event?"
					onConfirm={() => this.deleteEvent(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	state = {
		events: [],
	};

	componentDidMount() {
		this.loadEvents();
	}

	loadEvents = () => {
		const url = "api/v1/events/index";
		fetch(url)
			.then((data) => {
				if (data.ok) {
					return data.json();
				}
				throw new Error("Network error.");
			})
			.then((data) => {
				data.forEach((event) => {
					const newEl = {
						key: event.id,
						id: event.id,
						name: event.name,
						description: event.description,
						start_date: event.start_date,
						end_date: event.end_date,
					};

					this.setState((prevState) => ({
						events: [...prevState.events, newEl],
					}));
				});
			})
			.catch((err) => message.error("Error: " + err));
	};

	reloadEvents = () => {
		this.setState({ events: [] });
		this.loadEvents();
	};

	deleteEvent = (id) => {
		const url = `api/v1/events/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadEvents();
					return data.json();
				}
				throw new Error("Network error.");
			})
			.catch((err) => message.error("Error: " + err));
	};

	render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.events}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<AddEventModal reloadEvents={this.reloadEvents} />
			</>
		);
	}
}

export default Events;