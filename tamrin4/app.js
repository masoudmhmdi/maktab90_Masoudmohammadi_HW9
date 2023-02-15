const ulContainer=document.getElementById("ul")

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};


function childrenOf(items) {
  input=Object.entries(items)
  let children = [];
  input.forEach(function (item) {
   children.push(...item)
  });
  return children;
}


function nestedList(){
  let result=document.createElement("ul")
  let arrOfData=Object.entries(data)
  arrOfData.forEach(([key,value])=>{
    let newLi=document.createElement("li")
    newLi.textContent=key
    if(childrenOf(value).length){
      console.log(childrenOf(value))
      childrenOf(value).forEach((item)=>{
        console.log(item)
        if(typeof(item)=="string"){
          newLi.append(item)
        }
        else{
          let newUl=document.createElement("ul")
        childrenOf(item).forEach((items)=>{
          if(typeof(items)==="string"){
            let newLi2=document.createElement("li")
            newLi2.append(items)
            newUl.append(newLi2)
          }
        })
        newLi.append(newUl)
        }
      })
    }
    result.append(newLi)
    // console.log(arrItems)
  })
  ulContainer.append(result)
}

nestedList()

// // console.log(Object.entries(data))

// function createLi(arr){
//   arr.map((v)=>{
//     let newLi=document.createElement("li")
//     newLi.textContent=v
//     ulContainer.append(newLi)
//   })
// }

// function x(key) {
//   let tempArr = [];
//   let spratArr = [...kye];
//   return spratArr;
// }

// function createList() {
//   for (let key of Object.entries(data)) {
//     createLi(key)
//   }
// }

// createList();

// (function () {
//   function childrenOf(targetId, items) {
//     var children = [];
//     items.forEach(function (item) {
//       if (item.parent_id === targetId) {
//         children.push(item);
//       }
//     });
//     return children;
//   }

//   function nestedList(id, items) {
//     var result = "";
//     var children = childrenOf(id, items);
//     if (children.length) {
//       result = "<ul>";
//       children.forEach(function (child) {
//         result += "<li>";
//         result += child.label;
//         result += nestedList(child.id, items);
//         result += "</li>";
//       });
//       result += "</ul>";
//     }
//     return result;
//   }

//   var json = {
//     items: [
//       { id: 45, label: "Test 1.2.1", parent_id: 2 },
//       { id: 12, label: "Test 1.0", parent_id: 0 },
//       { id: 32, label: "Test 1.1", parent_id: 12 },
//       { id: 2, label: "Test 1.2", parent_id: 12 },
//     ],
//   };

//   var rootId = 0;
//   var output = nestedList(rootId, json.items);
//   document.body.innerHTML=output
//   console.log("<html><body>");
//   console.log(output);
//   console.log("</body></html>");
// })();
