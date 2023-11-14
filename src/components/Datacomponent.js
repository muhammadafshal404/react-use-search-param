import React from 'react';
import App from '../App';
const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
};
  
class DataComponent extends React.Component {
    render() {
      return (
            <div>
                <App />
                <h1>Hiiiiii</h1>
                <div >
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                        
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div  style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </div>
        // <table style={thStyle} className="table">
        //   <thead>
        //       <tr>
        //         <th>&nbsp;</th>
        //         <th>Product A</th>
        //         <th>Product B</th>
        //         <th>Product C</th>
        //         <th>Product D</th>
        //       </tr>
        //   </thead>
        //   <tbody style={{background: "aqua"}}>
        //       <tr>
        //         <td>Company A</td>
        //         <td>5</td>
        //         <td>6</td>
        //         <td>1</td>
        //         <td>2</td>
        //       </tr>
        //       <tr>
        //         <td>Company B</td>
        //         <td>1</td>
        //         <td>5</td>
        //         <td>2</td>
        //         <td>5</td>
        //       </tr>
        //       <tr>
        //         <td>Company C</td>
        //         <td>1</td>
        //         <td>6</td>
        //         <td>8</td>
        //         <td>3</td>
        //       </tr>
        //       <tr>
        //         <td>Company D</td>
        //         <td>1</td>
        //         <td>2</td>
        //         <td>0</td>
        //         <td>2</td>
        //       </tr>
        //       <tr>
        //         <td>Company E</td>
        //         <td>3</td>
        //         <td>0</td>
        //         <td>3</td>
        //         <td>0</td>
        //       </tr>
        //       <tr>
        //         <td><strong>Gross Total</strong></td>
        //         <td>11</td>
        //         <td>19</td>
        //         <td>14</td>
        //         <td>12</td>
        //       </tr>
        //   </tbody>
        //   <caption>Previously sold products</caption>
        // </table>       
      );
    }
  }

  export default DataComponent;