import Common from './../common/Common'

export function updateMemo (param) {
  let jsonStrParam = JSON.stringify(param)
  return Common.reqAjax({
    method: 'post',
    url: '/updateMemo',
    data: jsonStrParam
  })
}

export function deleteMemo (param) {
  let jsonStrParam = JSON.stringify(param)
  return Common.reqAjax({
    method: 'post',
    url: '/deleteMemo',
    data: jsonStrParam
  })
}