/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect } from 'react'
import { useIntersection } from 'react-use'

export const useInfiniteScroll = (
  ref: MutableRefObject<any>,
  fetch: Function,
) => {
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  useEffect(() => {
    if (intersection?.intersectionRatio === 1) {
      fetch()
    }
  }, [intersection])
}
