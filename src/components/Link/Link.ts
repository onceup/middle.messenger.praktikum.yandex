import Block from "../../core/Block";
import tmpl from "./tmpl";

export default class Link extends Block {
  render() {
    return this.compile(tmpl, {...this.props})
  }
}
