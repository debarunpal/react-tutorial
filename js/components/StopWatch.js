var StopWatch = React.createClass({


	getInitialState: function() {
	
		return {
	
			time: 0,

			until: 0
	
		};
	
	},


	type: function(e) {

		this.setState({ until: e.target.value });

	},


	start: function() {

		(this.refs.button).disabled = true;

		this.interval = setInterval( () => {

			this.tick();

			if (this.isTimeUp()) {

				this.finish();

			}

		}, 1000);
	},


	isTimeUp: function() {

		return this.state.time == this.state.until;

	},


	tick: function() {

		this.setState( { time: this.state.time + 1 });

	},


	finish: function() {

		//alert("Ding Ding Ding!!!");

		this.setState({ time: 0, until: '' });

		(this.refs.input).focus();

		(this.refs.button).disabled = false;

		return clearInterval(this.interval);


	},
	
	
	render: function() {

		return (

			<div>
				<input ref="input" onChange={this.type} value={this.state.until} />

				<button ref="button" onClick={this.start}>Go</button>
				
				<h1>{this.state.time}</h1>

			</div>

		);

	}

});


ReactDOM.render(<StopWatch />, document.body);

