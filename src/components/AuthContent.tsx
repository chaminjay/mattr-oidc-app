import * as React from "react";
import JsonTreeViewer from "./JsonTreeViewer";

export interface IAuthContentProps {
  api: any;
  user: any;
}

export default class AuthContent extends React.Component<
  IAuthContentProps,
  any
> {
  public shouldExpandNode = (
    keyPath: Array<string | number>,
    data: [any] | {},
    level: number
  ) => {
    return true;
  };

  public render() {
    return (
      <div className="row mt-3 mt-md-5">
        <div className="col-12">
          <code>
            <JsonTreeViewer
              data={this.props.user}
              title="User Profile"
              shouldExpandNode={this.shouldExpandNode}
            />
          </code>
        </div>
        {/* <div className="col-md-6">
          <JsonTreeViewer data={this.props.api} title="Api Response" shouldExpandNode={this.shouldExpandNode} />
        </div> */}
      </div>
    );
  }
}
