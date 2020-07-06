function input (
      state = [
            {id: 0, size: "medium", text: "Dog spotted: golden retriever."},
            {id: 1, size: "medium", text: "Huskies at the park!"},
            {id: 2, size: "medium", text: "A hypoallergenic king was spotted. 10/10 fluff."}
      ], action) {
      switch (action.type) {
          case 'ADD_ITEM':
              return [
                    ...state,
                    {
                    size: action.size,
                    text: action.text
                    }
                ]   
              
  
          case 'DELETE_ITEM':
              return [...state].filter((post) => {
                    return post.id !== action.id
              })
          
          default:
              return state;
      }
  }

  export default input