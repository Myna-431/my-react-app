const Object=()=> {
    const student =[      {
        id:1,
        name:"arun",
        age: 21,
        marks:90
    }
]
console.log(student);


    /*const data=student.map((i)=>{
        return (
        <>
        { i.name}
        </>
        )
    })
    console.log(data);*/
    const numbers=[1,2,3,4,5,6];
    console.log("pop",numbers.pop(),numbers)
    console.log("push",numbers.push(7),numbers)
    console.log("shift",numbers.shift(2),numbers)
    console.log("unshift",numbers.unshift(0),numbers)
    const filtered=numbers.filter(
        function (num){
            return num>2

        }
    )
    console.log(filtered);


    const names=["jaga","myna","pinkuu","deepthi"]
    const result=names.slice(1,3)
    console.log("result",result,names);


    const spliceresult=names.splice(1,1,"added")
    console.log(">>>>>>",spliceresult);
    const datamark= student.filter((i)=>i.marks>89)
        console.log(datamark)

    return(
        
        <>
        <table>
            <thead>
                <tr>
                <th>name</th>
                <th>age</th>
                <th>mark</th>
                <th>dept</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>myna</td>
                    <td>18</td>
                    <td>70</td>
                    <td>It</td>
                </tr>
                <tr>
                    <td>jaga</td>
                    <td>22</td>
                    <td>95</td>
                    <td>It</td>
                </tr>
            </tbody>
        </table>
        {datamark.map((i)=>{
            return(
                <>
                {i.name}
                </>
            )
        })}
        </>
    )
}  

export default Object;