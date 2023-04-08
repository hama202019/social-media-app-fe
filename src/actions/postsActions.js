export const startRetrievine = () => ({
    type: "RETREIVING_START"
})

export const retreivingSuccess = data => ({
    type: "RETRIEVING_SUCCESS",
    payload: {
        data
    }
})

export const retreivingFail = errMsg => ({
    type: "RETRIEVING_FAIL",
    payload: {
        errMsg
    }
})

export const startUploading = () => ({
    type: "UPLOADING_START"
})

export const uploadingSuccess = data => ({
    type: "UPLOADING_SUCCESS",
    payload: {
        data
    }
})

export const uploadingFail = errMsg => ({
    type: "UPLOADING_FAIL",
    payload: {
        errMsg
    }
})

export const likePostAction = (newPost, postId) => ({
    type: "LIKE_POST",
    payload: {
        newPost,
        postId
    }
})

export const deletePostAction = postId => ({
    type: "DELETE_POST",
    payload: {
        postId
    }
})