import React from 'react'
import  './Chairmen.css'
import img from '..//images/logo4.png'
import Comp4 from '../Homepagestuf/Comp4/Comp4'
import Comp5 from '../Homepagestuf/Comp5/Comp5'
import Slide from '../Homepagestuf/slide/Slide'

const chairimage=img ;
const chairdata=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, molestiae deleniti quod, blanditiis animi corrupti porro ipsa error iusto beatae ipsam a aliquid qui eum. Tempora dicta maxime beatae
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque, accusamus quasi vel fugit similique blanditiis voluptate explicabo nostrum eaque! Earum blanditiis cumque sequi cum qui quo pariatur accusantium id, quisquam aut reprehenderit delectus nobis vitae commodi corrupti dicta. Officia, nemo. Deleniti nobis quas vel dolor facilis iste aliquam, quam suscipit qui praesentium unde quae alias nihil consequuntur repellat reprehenderit optio nulla excepturi. Autem repellendus ex similique blanditiis quisquam adipisci! Quas, aperiam repellendus hic nihil rerum enim, suscipit iste atque in officiis illo optio incidunt? Omnis odio perspiciatis quam ab, veritatis adipisci impedit necessitatibus nobis unde reprehenderit numquam mollitia, porro quaerat hic! Molestiae quibusdam nemo unde ducimus cumque harum est fugiat, magni, soluta itaque, sunt dignissimos eveniet tempora deserunt aut. Deserunt natus dolores illum illo perspiciatis! Quam, consequatur. Fugiat ad nesciunt quam cumque, eius expedita velit recusandae odit a aliquam, omnis debitis nemo hic quidem error repellat aperiam labore perferendis ut culpa voluptatum soluta blanditiis illo. Dolores libero nemo similique saepe facere debitis modi ipsa harum unde. Necessitatibus ab impedit, quas rerum eius natus nulla saepe facilis consequatur officia dolor harum, magnam vel nemo! Ullam, aliquam reiciendis? Velit quos aspernatur minima cupiditate. Nulla eaque consectetur praesentium dignissimos rerum magnam. Eveniet.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur maxime saepe, quidem excepturi deserunt officiis perferendis est? Facilis, eius beatae voluptate ullam deleniti nisi eum repellendus cumque dolor vitae alias est autem expedita explicabo earum tempore fuga nihil aliquid possimus ab suscipit quaerat laboriosam quia. Commodi, fugit atque tempora tenetur aliquam maiores cum reprehenderit neque consectetur nemo iusto, nesciunt voluptatibus molestiae accusantium libero deleniti dolores. Quis itaque voluptas, doloribus molestias ipsam nihil corporis a dolor. Labore sunt illum fuga architecto maxime? Ipsa repellat modi a sunt. Repellendus hic nobis odio delectus quo necessitatibus tempore itaque facere rem error suscipit animi rerum sequi id esse consequatur amet, blanditiis sint laboriosam architecto laborum numquam ea qui? Adipisci quaerat quae iure laudantium reprehenderit odio necessitatibus rem! Itaque, unde veritatis blanditiis perferendis sunt et hic pariatur, eum obcaecati delectus vel dicta minima voluptatem doloremque commodi, ratione nulla magnam maxime enim quaerat vero earum a libero nemo? Amet voluptatibus quos illum ab omnis debitis sunt vero, doloremque quibusdam ex exercitationem sequi error. Quo, molestiae ex beatae tempora eum vero a minima? Eligendi quo dicta eos sunt minus placeat nemo aut enim, quod odit accusamus fuga nesciunt, obcaecati minima, sit neque qui quibusdam velit omnis. Ratione sint expedita assumenda officia laborum ipsa ullam ex repudiandae, voluptate in illum minus cupiditate similique eius quisquam quis optio impedit cumque, nesciunt fugiat, totam sit. Pariatur, nobis! Cumque fuga sapiente consequuntur animi eveniet a fugit eius sunt. Sed consequatur ex soluta saepe obcaecati nulla vitae sint hic, quod suscipit labore minus voluptates odit corrupti nisi aspernatur in dolore placeat pariatur nemo! Adipisci officiis repudiandae ipsum non nisi dolor minima officia nemo? Saepe, voluptate amet, modi eligendi perspiciatis omnis veritatis explicabo error soluta repellendus nam aut. Corrupti, adipisci obcaecati fuga nihil doloribus fugit sit, cumque tempore ipsa exercitationem porro ex quibusdam ipsam harum reprehenderit quae amet impedit quas tenetur eum delectus, quidem nesciunt fugiat. Facere natus voluptates a reprehenderit perferendis odio eum, obcaecati quisquam cum delectus expedita iste quas rem nemo vero repellendus ullam aut fuga ipsum molestiae non accusantium qui dignissimos! Nostrum sequi eligendi dolores excepturi cum quasi eaque distinctio. Animi nesciunt id ab impedit omnis beatae minus sunt quos soluta atque. Ipsum, nulla! Error facere nemo, repellat quasi quam mollitia delectus incidunt rerum, cupiditate id facilis quibusdam. Alias unde vel quia minus consequuntur amet atque animi. Deleniti voluptatum possimus sapiente architecto iusto veritatis veniam eveniet sunt ea, perspiciatis autem cupiditate. Vitae, et? Soluta cumque facere eligendi expedita beatae quaerat est dicta fugiat, hic amet inventore obcaecati ratione sapiente illo totam ullam sed tempore nisi molestias, quam ut quas, incidunt fugit eius. In neque ex dolore laboriosam quas pariatur aliquam quia sint necessitatibus reiciendis esse, aspernatur magni harum asperiores commodi possimus deleniti facere ipsa debitis voluptates dicta. Quibusdam delectus reprehenderit dolore a, voluptatum quae exercitationem magni. Laudantium illo, itaque magni deleniti provident obcaecati repellat sunt explicabo amet ea illum necessitatibus, iste doloremque. Cum voluptate harum placeat nisi. Minima fugit ipsum laudantium ducimus, dolores dolorem soluta atque assumenda reprehenderit nulla?';`

const Chairmen = () => {
  return (
    <div >
           <Slide />
            <div className='uni'>
                <h1>Chairpersion</h1>
                <img src={chairimage} alt=" img" />
                <p>{chairdata}
                </p>
            </div>
            <div className="multi">
                <div className="video">
                    <Comp4 />
                </div>
                <div className="comp5card">
                    < Comp5 />
                </div>
            </div>
        </div>
  )
}

export default Chairmen