import React from "react";
import { Animate } from "react-move";
import { easeQuadInOut } from "d3-ease"; // Import a smooth easing function

class AnimatedProgressProvider extends React.Component {
  frameId = undefined;

  state = {
    value: this.props.valueStart
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.frameId = requestAnimationFrame(this.animate);
    } else {
      this.setState({ value: this.props.valueEnd });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.valueEnd !== this.props.valueEnd) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
  }

  animate = () => {
    const { value } = this.state;
    const { valueStart, valueEnd, duration } = this.props;
    const startTime = performance.now();

    const update = () => {
      const currentTime = performance.now();
      const elapsedTime = (currentTime - startTime) / 1000; // Convert milliseconds to seconds
      const progress = Math.min(1, elapsedTime / duration); // Ensure progress does not exceed 1
      const easedValue = easeQuadInOut(progress) * (valueEnd - valueStart) + valueStart;

      this.setState({ value: easedValue });

      if (progress < 1) {
        this.frameId = requestAnimationFrame(update);
      }
    };

    this.frameId = requestAnimationFrame(update);
  };

  render() {
    const { value } = this.state;
    return <>{this.props.children(value)}</>;
  }
}

export default AnimatedProgressProvider;
