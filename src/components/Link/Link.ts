import Block from "../../core/block";
import tmpl from "./tmpl";

export default class Link extends Block {
  render() {
    return this.compile(tmpl, {...this.props})
  }
}
