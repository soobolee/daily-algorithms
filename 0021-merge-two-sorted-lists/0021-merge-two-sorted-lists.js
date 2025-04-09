/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // list1이 null이면 더 이상 비교할 노드가 없으므로 list2 반환
    if (!list1) {
        return list2;
    }
    // list2가 null이면 더 이상 비교할 노드가 없으므로 list1 반환
    if (!list2) {
        return list1;
    }

    // 두 노드의 값을 비교해서 더 작은 값을 가진 노드를 결과 리스트 연결
    if (list1.val <= list2.val) {
        // list1의 값이 더 작거나 같으면 list1이 현재 노드가 되고,
        // list1의 다음 노드와 list2를 다시 병합하여 list1.next에 연결
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        // list2 또한 마찬가지 각 값의 next를 변경하며 최종 반환은 정렬된 리스트 반환
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
