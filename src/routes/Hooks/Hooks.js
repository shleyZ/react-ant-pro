import React, { useState, useEffect } from 'react';
import {Card, Button } from 'antd';
function Hooks(props) {
    // Declare a new state variable, which we'll call "count"
    // console.log(props);
    const [count, setCount] = useState(0)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
          <div>
            <Card title="React Hooks"  bordered={false}>
              <div>
                <p>You clicked {count} times</p>
                <Button type="primary" onClick={() => setCount(count + 1)}>
                  Click me
                </Button>
              </div>
            </Card>
          </div>
    );
}
export default Hooks;

