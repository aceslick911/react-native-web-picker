import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Picker from '../src/Picker';
import Popup from '../src/Popup';

class Demo extends React.Component<any, any> {
  state = {
    disabled: false,
    value: 0,
  };

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({
      value,
    });
  }

  onScrollChange = (value) => {
    console.log('onScrollChange', value);
  }

  disable = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  onOk = (value) => {
    console.log('onOk', value);
    this.setState({
      value,
    });
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  renderPickerData = () => {
    const items: any[] = [];
    for (let i = 0; i < 100; i++) {
      items.push(<Picker.Item value={i + ''} key={i}>
        {i}
      </Picker.Item>);
    }

    return <Picker
      selectedValue={this.state.value}
      // disabled={this.state.disabled}
      onValueChange={this.onChange}
      onScrollChange={this.onScrollChange}
    >
      {items}
    </Picker>
  }

  render() {
    return (
      <div style={{ margin: '10px 30px' }}>
        <h2>popup date picker</h2>
        <button onClick={this.disable}>{this.state.disabled ? 'enable' : 'disable'}</button>
        <div>
          <Popup
            className="fortest"
            transitionName="rmc-picker-popup-slide-fade"
            maskTransitionName="rmc-picker-popup-fade"
            content={this.renderPickerData()}
            title="Picker"
            disabled={this.state.disabled}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
            value={this.state.value}
            maskClosable={false}
          >
            <button disabled={this.state.disabled}>{'open'}</button>
          </Popup>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
