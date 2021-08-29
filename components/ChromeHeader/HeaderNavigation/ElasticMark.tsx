/*
 * ELASTICSEARCH CONFIDENTIAL
 * __________________
 *
 *  Copyright Elasticsearch B.V. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch B.V. and its suppliers, if any.
 * The intellectual and technical concepts contained herein
 * are proprietary to Elasticsearch B.V. and its suppliers and
 * may be covered by U.S. and Foreign Patents, patents in
 * process, and are protected by trade secret or copyright
 * law.  Dissemination of this information or reproduction of
 * this material is strictly forbidden unless prior written
 * permission is obtained from Elasticsearch B.V.
 */

import React, { FunctionComponent, HTMLAttributes } from 'react'

type Props = HTMLAttributes<SVGElement>

// heavily "inspired" by https://github.com/elastic/kibana/blob/c42b99419305afcc784f1e1cf3c31acd9606747a/src/core/public/chrome/ui/header/elastic_mark.tsx

const ElasticMark: FunctionComponent<Props> = ({ ...props }: HTMLAttributes<SVGElement>) => (
  <svg
    width='64'
    height='19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby='elasticMark'
    {...props}
  >
    <title id='elasticMark'>Elastic</title>
    <path d='M9.74 16.882l.711-.076.046 1.455c-1.879.257-3.485.393-4.818.393-1.773 0-3.03-.515-3.773-1.545C1.164 16.08.8 14.473.8 12.306c0-4.333 1.727-6.5 5.167-6.5 1.666 0 2.909.47 3.727 1.394.818.924 1.227 2.394 1.227 4.379l-.106 1.409H2.664c0 1.364.242 2.379.742 3.03.5.652 1.349.985 2.576.985 1.242.03 2.485-.015 3.757-.121zm-.667-5.349c0-1.515-.243-2.59-.728-3.212-.484-.621-1.272-.94-2.363-.94s-1.924.334-2.47.986c-.545.651-.833 1.712-.848 3.166h6.409zM13.497 18.427V.7h1.848v17.727h-1.848zM27.027 9.806v6.076c0 .621 1.53.742 1.53.742l-.09 1.637c-1.303 0-2.38.106-3.03-.515a10.861 10.861 0 01-4.44.924c-1.136 0-2-.319-2.59-.97-.592-.636-.895-1.56-.895-2.773 0-1.197.303-2.09.91-2.651.605-.56 1.56-.925 2.863-1.046l3.879-.363v-1.06c0-.834-.182-1.44-.546-1.804-.363-.364-.863-.545-1.485-.545H18.27V5.82h4.742c1.394 0 2.41.318 3.046.97.651.636.97 1.651.97 3.015zm-7.606 5.03c0 1.516.621 2.273 1.879 2.273a9.89 9.89 0 003.303-.56l.56-.197v-4.076l-3.65.348c-.743.06-1.274.273-1.607.637-.333.363-.485.894-.485 1.575zM34.255 7.473c-1.788 0-2.697.62-2.697 1.879 0 .575.212.984.62 1.227.41.242 1.35.485 2.819.742 1.47.258 2.5.606 3.106 1.076.606.454.91 1.318.91 2.59 0 1.274-.41 2.198-1.228 2.789-.818.59-2 .894-3.576.894-1.015 0-4.424-.38-4.424-.38l.106-1.605c1.954.182 3.379.333 4.333.333.955 0 1.682-.151 2.182-.454.5-.303.758-.819.758-1.53 0-.713-.212-1.198-.637-1.455-.424-.258-1.363-.5-2.818-.728-1.455-.227-2.485-.56-3.09-1.015-.607-.439-.91-1.272-.91-2.47 0-1.196.424-2.09 1.273-2.666.848-.576 1.909-.864 3.166-.864 1 0 4.485.258 4.485.258v1.621c-1.833-.106-3.333-.242-4.379-.242zM47.952 7.685h-3.925v5.909c0 1.409.106 2.348.303 2.788.212.44.697.666 1.47.666l2.197-.151.121 1.53c-1.106.182-1.94.273-2.515.273-1.288 0-2.167-.318-2.667-.94-.5-.62-.742-1.818-.742-3.575v-6.5h-1.758V6.079h1.758V2.29h1.833v3.773h3.925v1.62zM50.527 3.276V1.139h1.849v2.152l-1.849-.015zm0 15.151V6.08h1.849v12.348h-1.849zM60.406 5.821c.546 0 1.47.106 2.773.303l.59.076-.075 1.5c-1.318-.152-2.288-.227-2.91-.227-1.393 0-2.348.333-2.848 1-.5.666-.757 1.909-.757 3.712 0 1.803.227 3.06.697 3.773.47.712 1.44 1.06 2.924 1.06l2.91-.227.075 1.53c-1.53.227-2.682.349-3.44.349-1.924 0-3.257-.5-3.984-1.485-.728-.985-1.106-2.652-1.106-5 0-2.349.393-4 1.181-4.94.803-.939 2.122-1.424 3.97-1.424z' />
  </svg>
)

export default ElasticMark
