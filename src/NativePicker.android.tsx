import React from 'react';
import { ScrollView, View, StyleSheet, PixelRatio, Text } from 'react-native';
import PickerMixin from './PickerMixin';
import { IPickerProps } from './PickerTypes';

const ratio = PixelRatio.get();
const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: 0,
    top: -99,
    borderColor: '#aaa',
    borderTopWidth: 1 / ratio,
    borderBottomWidth: 1 / ratio,
  } as any,

  scrollView: {
    height: 0,
  },

  selectedItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  } as any,

  itemText: {
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
  } as any,
});

export interface IPickerProp {
  select: Function;
  doScrollingComplete: Function;
}

class Picker extends React.Component<IPickerProp & IPickerProps, any> {
  itemHeight: number;
  itemWidth: number;
  scrollBuffer: any;
  scrollerRef: any;
  contentRef: any;
  indicatorRef: any;

  onItemLayout = (e) => {
    const { height, width } = e.nativeEvent.layout;
    // console.log('onItemLayout', height);
    if (this.itemHeight !== height || this.itemWidth !== width) {
      this.itemWidth = width;
      this.indicatorRef.setNativeProps({
        style: [
          styles.indicator,
          {
            top: height * 3,
            height,
            width,
          },
        ],
      });
    }
    if (this.itemHeight !== height) {
      this.itemHeight = height;
      this.scrollerRef.setNativeProps({
        style: {
          height: height * 7,
        },
      });
      this.contentRef.setNativeProps({
        style: {
          paddingTop: height * 3,
          paddingBottom: height * 3,
        },
      });
      // i do no know why!...
      setTimeout(() => {
        this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
      }, 0);
    }
  }

  componentDidUpdate() {
    this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
  }

  componentWillUnMount() {
    this.clearScrollBuffer();
  }

  clearScrollBuffer() {
    if (this.scrollBuffer) {
      clearTimeout(this.scrollBuffer);
    }
  }

  scrollTo = (y) => {
    this.scrollerRef.scrollTo({
      y,
      animated: false,
    });
  }

  fireValueChange = (selectedValue) => {
    if (this.props.selectedValue !== selectedValue && this.props.onValueChange) {
      this.props.onValueChange(selectedValue);
    }
  }

  onScroll = (e) => {
    const { y } = e.nativeEvent.contentOffset;
    this.clearScrollBuffer();
    this.scrollBuffer = setTimeout(() => {
      this.clearScrollBuffer();
      this.props.doScrollingComplete(y, this.itemHeight, this.fireValueChange);
    }, 100);
  }

  render() {
    const { children, itemStyle, selectedValue, style } = this.props;
    const items = React.Children.map(children, (item: any, index) => {
      const totalStyle = [styles.itemText];
      if (selectedValue === item.props.value) {
        totalStyle.push(styles.selectedItemText);
      }
      totalStyle.push(itemStyle);
      return (
        <View
          ref={el => this[`item${index}`] = el}
          onLayout={index === 0 ? this.onItemLayout : undefined}
          key={item.key}
        >
          <Text style={totalStyle} numberOfLines={1}>{item.props.label}</Text>
        </View>
      );
    });
    return (
      <View style={style}>
        <ScrollView
          style={styles.scrollView}
          ref={el => this.scrollerRef = el}
          onScroll={this.onScroll}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        >
          <View ref={el => this.contentRef = el}>
            {items}
          </View>
        </ScrollView>
        <View ref={el => this.indicatorRef = el} style={styles.indicator}/>
      </View>
    );
  }
}

export default PickerMixin(Picker);
