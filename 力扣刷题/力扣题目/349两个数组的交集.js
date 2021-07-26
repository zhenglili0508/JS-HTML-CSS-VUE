var intersection = function(nums1, nums2) {
    let result = new Set()
    let nums2Set = new Set(nums2)
    for(num of nums1){
        // if(nums2.includes(num)){
        //     result.add(num)
        // }

        //数组搜索  复杂度0（n）
        // set map 复杂度0（1）
        if(nums2Set.has(num)){
            result.add(num)
        }

    }
    return Array.from(result)
};

let nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersection(nums1,nums2))