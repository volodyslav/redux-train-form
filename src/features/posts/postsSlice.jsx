import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: "Hello", text: "it's me", date: sub(new Date(), {minutes: 12}).toISOString()},
    {id: 2, title: "See you", text: "tomorrow", date: sub(new Date(), {minutes: 10}).toISOString()},
    {id: 3, title: "Here", text: "Im online", date: sub(new Date(), {minutes: 4}).toISOString()}
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postCreate: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, text){
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        text,
                        date: sub(new Date(), {minutes: 0}).toISOString()
                    }
                }
            }
            
        }
    }
})

export const showAllPosts = (state) => state.posts

export default postsSlice.reducer

export const {postCreate} = postsSlice.actions