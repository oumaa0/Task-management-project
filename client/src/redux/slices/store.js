import {configureStore} from '@reduxjs/toolkit'
import userSlices from './userSlices'
import taskSlices from './task.Slices'


export default configureStore({reducer:{user:userSlices,tasks:taskSlices}})