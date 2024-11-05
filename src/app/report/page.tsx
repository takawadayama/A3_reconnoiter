"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ReportPageContent = () => {
  const searchParams = useSearchParams();
  const companyName = searchParams ? searchParams.get("companyName") || "株式会社虎屋" : "株式会社虎屋";

  // アコーディオンの開閉状態管理
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpenIndustry, setIsOpenIndustry] = useState(false);

  // 各セクションのプロンプト入力管理
  const [prompt1, setPrompt1] = useState("株式会社虎屋（所在地：東京都港区、事業内容：和菓子の製造販売）の企業概要、事業概要をまとめてください。");
  const [prompt2, setPrompt2] = useState("株式会社虎屋（所在地：東京都港区、事業内容：和菓子の製造販売）の属する業界の最新動向、競合状況をまとめてください。また、具体的な競合他社を列挙してください。");
  const [prompt3, setPrompt3] = useState("株式会社虎屋（所在地：東京都港区、事業内容：和菓子の製造販売）の属する業界のM&A動向をまとめてください。");
  const [prompt4, setPrompt4] = useState("株式会社虎屋（所在地：東京都港区、事業内容：和菓子の製造販売）の優位性・独自性・将来性をまとめてください。");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg shadow-md w-2/3">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">{companyName} 調査結果</h1>

        {/* Genspark分析 タイトル */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Genspark分析</h2>


        {/* アコーディオン形式 */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2
              className="text-xl font-bold text-gray-700 cursor-pointer"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              ① 対象会社および事業内容に関する説明 {isOpen1 ? "▲" : "▼"}
            </h2>
            <button
              onClick={() => alert(`Re-generating with prompt: ${prompt1}`)}
              className="bg-gray-700 text-white py-1 px-4 rounded-md"
            >
              再生成
            </button>
          </div>

          {/* プロンプト入力 */}
          <div className="mt-2">
            <input
              type="text"
              value={prompt1}
              onChange={(e) => setPrompt1(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* 折りたたみ可能な説明文 */}
          {isOpen1 && (
            <p className="text-base text-gray-800 mt-4">
              株式会社虎屋（とらや）は、東京都港区赤坂に本社を置く和菓子製造・販売会社です。創業は室町時代後期に遡り、約480年の歴史を持つ老舗企業です。1947年に法人化され、現在は「とらや」のブランド名で広く知られています。
              <br /><br />
              <strong>企業概要</strong><br />
              設立: 1947年（昭和22年）5月24日<br />
              本社所在地: 東京都港区赤坂4丁目9-22<br />
              資本金: 2,400万円<br />
              売上高: 約196億8,700万円（2024年3月期実績）<br />
              従業員数: 854名（男性274名、女性580名）<br />
              <br />
              <strong>事業内容</strong><br />
              虎屋は主に和菓子の製造と販売を行っており、特に羊羹が有名です。「とらやの羊羹」はその品質と味わいから広く認知されています。事業は以下のような多岐にわたります。
              <br />
              和菓子製造: 伝統的な技術を用いて、季節ごとの生菓子や干菓子など多様な和菓子を製造しています。
              <br />
              販売チャネル: 自社店舗のほか、百貨店や空港ターミナルビル内でも商品を展開しており、国内外での販売も行っています。
              <br />
              文化的活動: 虎屋文庫を設置し、和菓子に関する歴史や文化を伝える活動も行っています。
              <br /><br />
              <strong>経営理念</strong><br />
              虎屋は「おいしい和菓子を喜んで召し上がって頂く」という理念のもと、品質向上と顧客満足を追求しています。持続可能な製品作りにも取り組んでいます。
            </p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2
              className="text-xl font-bold text-gray-700 cursor-pointer"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              ② 業界に関する最新動向や競合状況 {isOpen2 ? "▲" : "▼"}
            </h2>
            <button
              onClick={() => alert(`Re-generating with prompt: ${prompt2}`)}
              className="bg-gray-700 text-white py-1 px-4 rounded-md"
            >
              再生成
            </button>
          </div>

          <div className="mt-2">
            <input
              type="text"
              value={prompt2}
              onChange={(e) => setPrompt2(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {isOpen2 && (
            <p className="text-base text-gray-800 mt-4">
              株式会社虎屋は、和菓子業界において長い歴史を持つ老舗企業であり、特に羊羹や季節の生菓子で知られています。和菓子業界の最新動向としては、以下の点が挙げられます。
              <br /><br />
              <strong>業界の最新動向</strong><br />
              新業態の展開: 虎屋は伝統を守りつつも、新しいスタイルの店舗「TORAYA GINZA」を2024年4月にオープンしました。ここでは職人が目の前で和菓子を作るスタイルを採用し、顧客とのインタラクションを重視しています。
              <br /><br />
              デジタルマーケティングと国際展開: SNSやオンライン広告を活用し、ブランド認知度を高めています。また、国際市場への進出も視野に入れ、日本国外でのブランド認知度向上を目指しています。
              <br /><br />
              消費者の健康志向への対応: 健康志向の高まりに応じ、低糖質や無添加の商品開発を進めています。季節ごとの限定商品や健康志向を取り入れた新しいラインナップが市場に投入されています。
              <br /><br />
              オンライン販売の拡大: コロナ禍を経て、オンラインでの購入が増加しており、虎屋もオンラインショップを運営しています。
              <br /><br />
              <strong>競合状況</strong><br />
              和菓子業界には多くの競合他社が存在し、それぞれが独自の製品やブランドを展開しています。以下に主要な競合他社を挙げます。
              <br /><br />
              松屋: 伝統的な和菓子メーカーで、長い歴史を持ち、ブランド力を活かしています。
              <br />
              亀屋万年堂: 多様な和菓子を提供し、特に季節限定商品に力を入れています。
              <br />
              赤福: 伊勢名物の赤福餅で有名で、地域密着型のビジネスモデルを採用しています。
              <br />
              塩瀬総本家: 日本最古の菓子司として知られ、特に饅頭の製造で有名です。
              <br />
              舟和本店: 芋ようかんが有名で、伝統的な製法を守りながらも新しい商品開発にも力を入れています。
              <br />
              中村屋: 和菓子だけでなく洋菓子も手掛け、和菓子ブランド「円果天」を展開しています。
              <br /><br />
              これらの企業はそれぞれ異なる強みを持ち、市場で競争しています。虎屋は高価格帯の商品を提供しているため、価格競争が少ない一方で、若年層の顧客離れという課題があります。また、海外市場への進出も重要な戦略となっており、特に高級志向の顧客層をターゲットとしています。
            </p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2
              className="text-xl font-bold text-gray-700 cursor-pointer"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              ③ 業界のM&A動向 {isOpen3 ? "▲" : "▼"}
            </h2>
            <button
              onClick={() => alert(`Re-generating with prompt: ${prompt3}`)}
              className="bg-gray-700 text-white py-1 px-4 rounded-md"
            >
              再生成
            </button>
          </div>

          <div className="mt-2">
            <input
              type="text"
              value={prompt3}
              onChange={(e) => setPrompt3(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {isOpen3 && (
            <p className="text-base text-gray-800 mt-4">
              株式会社虎屋は、和菓子の製造販売を行う老舗企業であり、特に羊羹の製造で広く知られています。和菓子業界におけるM&A（企業合併・買収）の動向は、業界の持続可能性や競争力を高めるための重要な手段として注目されています。
              <br /><br />
              和菓子業界は、後継者不足や高齢化といった課題に直面しており、多くの和菓子店は家族経営であるため、経営者の高齢化が進む中で後継者が不在となるケースが増加しています。このような状況では、M&Aを通じて事業を継続し、伝統的な技術やブランドを守ることが求められています。M&Aによって、経営資源の強化や新たな市場への進出が可能となり、業界全体の持続可能な発展に寄与することが期待されています。
              <br /><br />
              具体的なM&A事例としては、シャトレーゼホールディングスによる亀屋万年堂の買収があります。この買収は、亀屋万年堂が持つ伝統的な和菓子製造技術とブランドを活かしつつ、シャトレーゼの経営資源とシナジー効果を生み出すことを目的としています。
              <br /><br />
              また、和菓子業界のM&Aにはいくつかのメリットがあります。例えば、従業員の雇用を確保できる点や、独自の製法や技術を承継できる点が挙げられます。特に小規模な和菓子店が突然の事業閉鎖を避けるためには、他社との統合が有効です。また、長年培われたブランド価値を保持しつつ、新たな経営資源を得ることで、市場での競争力を高めることができます。
              <br /><br />
              総じて、和菓子業界におけるM&Aは、伝統的な技術やブランドを守りながら、新たな成長機会を模索するための重要な戦略となっています。今後もこの傾向は続くと考えられ、多様な事業承継や経営統合が進むことでしょう。
            </p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2
              className="text-xl font-bold text-gray-700 cursor-pointer"
              onClick={() => setIsOpen4(!isOpen4)}
            >
              ④ 対象会社の優位性・独自性・将来性 {isOpen4 ? "▲" : "▼"}
            </h2>
            <button
              onClick={() => alert(`Re-generating with prompt: ${prompt4}`)}
              className="bg-gray-700 text-white py-1 px-4 rounded-md"
            >
              再生成
            </button>
          </div>

          <div className="mt-2">
            <input
              type="text"
              value={prompt4}
              onChange={(e) => setPrompt4(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {isOpen4 && (
            <p className="text-base text-gray-800 mt-4"> {/* 文字サイズを調整 */}
              株式会社虎屋は、和菓子の製造販売において長い歴史と伝統を持つ企業であり、その優位性、独自性、将来性は以下のようにまとめられます。
              <br /><br />
              <strong>優位性</strong><br />
              虎屋は高品質な和菓子を提供することで知られています。特に、羊羹や生菓子などの主力商品は、厳選された素材を使用し、伝統的な製法を守りながらも現代的な技術を取り入れています。この品質の高さは、消費者からの信頼を得る要因となっており、和菓子業界において常にトップクラスの売上を誇っています。また、虎屋は全国和菓子協会の中心的な役割を果たしており、業界全体の発展にも寄与しています。
              <br /><br />
              <strong>独自性</strong><br />
              虎屋は「和菓子の日」を制定したり、国際的な菓子展に出品するなど、日本文化の発信にも力を入れています。特にパリ店の開設は、日本の和菓子を海外に広める重要なステップであり、フランス市場での成功がその後の海外展開にもつながっています。虎屋は単なる和菓子店ではなく、日本文化を象徴するブランドとしての地位を確立しています。
              <br /><br />
              <strong>将来性</strong><br />
              虎屋は新商品の開発や市場ニーズへの柔軟な対応を進めています。例えば、「羊羹de 巴里」のような新しい商品ラインは、若い世代へのアプローチとして成功を収めており、今後も多様化する消費者ニーズに応じた商品展開が期待されます。また、生産体制の見直しや効率化も進めており、御殿場工場の稼働によって生産能力が向上し、高品質な製品を安定的に供給できる体制が整っています。
              <br /><br />
              総じて、株式会社虎屋はその伝統と革新を融合させ、高品質な和菓子を提供し続けることで市場での競争力を維持しており、今後も成長が期待される企業です。
            </p>
          )}
        </div>

        <hr className="my-8 border-t-2 border-gray-300" />

        {/* ChatGPT＋SPEEDAレポート分析 タイトル */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ChatGPT＋SPEEDA分析</h2>

        {/* ①業界分析 */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2
              className="text-xl font-bold text-gray-700 cursor-pointer"
              onClick={() => setIsOpenIndustry(!isOpenIndustry)}
            >
              ① 業界分析 {isOpenIndustry ? "▲" : "▼"}
            </h2>
          </div>

          {/* 業界分析ダミーデータ */}
          {isOpenIndustry && (
            <div className="text-base text-gray-800 mt-4">
              <strong>現状と将来の見立て</strong><br /><br />
              <strong>現状</strong><br />
              日本の菓子市場は成熟しており、国内出荷額は約3.6兆円と報告されています。
              カテゴリ別に見ると、チョコレート、スナック、ビスケット、米菓、和洋菓子などがあり、チョコレート類やスナック類の市場が大きく成長しています。
              原材料価格の高騰が続き、特に2024年にはカカオ豆価格が急騰し、値上げが相次いでいます。
              市場には大手と中小企業が混在し、大手メーカーが市場シェアの大部分を占めている一方、地方の中小企業やプライベートブランド（PB）も参入しています。
              コロナ禍でのインバウンド需要が消失しましたが、2023年以降回復傾向にあり、インバウンド需要が重要な要素となっています。
              <br /><br />
              <strong>将来の見立て</strong><br />
              健康志向の高まりに伴い、カロリーや糖分を抑えた機能性菓子や、栄養価の高い商品が増加すると予想されます。
              少子高齢化の影響で、若年層へのアピールが必要であり、トレンドを取り入れた商品開発が求められます。
              海外市場への展開も重要視されており、特にアジア、北米市場での成長が期待されています。
              <br /><br />
              <strong>② 投資対象としてのメリットとデメリット</strong><br /><br />
              <strong>メリット</strong><br />
              成熟市場の安定性: 国内出荷額が安定しており、食品業界全体での信頼性が高いです。
              ブランド力: 明治、江崎グリコ、カルビーなど、大手企業の強力なブランドが市場をリードしており、安定した収益基盤を持っています。
              機能性食品の成長: 健康志向や高齢者向けの機能性菓子が成長分野として期待されており、新たなニーズに対応できる企業は競争優位に立てます。
              インバウンド需要の回復: 観光業の回復に伴い、菓子の土産需要も戻り、特に訪日外国人による購買が増加すると見込まれています。
              <br /><br />
              <strong>デメリット</strong><br />
              原材料価格の影響: カカオや小麦粉などの原材料価格が不安定であり、利益率を圧迫する可能性があります。
              競争の激化: 市場には大手と中小企業が混在しており、特にプライベートブランド（PB）の台頭により価格競争が激化しています。
              消費者嗜好の多様化: 消費者のニーズが多様化しており、新商品開発やマーケティングにおいて迅速な対応が求められるため、投資リスクが高まる可能性があります。
              <br /><br />
              <strong>③ DX（デジタルトランスフォーメーション）によるバリューアップ</strong><br /><br />
              <strong>DXによるバリューアップの可能性</strong><br />
              サプライチェーンの最適化: デジタル技術を活用することで、原材料の調達や在庫管理、物流の効率化が可能となり、コスト削減やリードタイムの短縮が期待されます。
              EC・マーケティングの強化: SNSやオンラインストアの活用により、消費者との直接的なコミュニケーションを強化し、販売戦略の柔軟化やトレンドに迅速に対応することで売上向上が見込まれます。
              データ活用によるパーソナライズ化: 消費者の購買データを分析することで、個別に最適化された商品提案やマーケティングが可能となり、顧客ロイヤリティを高めることができます。
              効率的な新商品開発: 消費者データや市場データをリアルタイムで分析し、迅速に新商品の開発・テストを行うことで、消費者ニーズに即した製品投入が可能となります。
              このように、DXを活用することで、効率化や消費者との接点を強化し、持続可能な成長を実現できる可能性があります。
            </div>
          )}
        </div>

        {/* ②バリュエーション */}
        <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-700">② バリュエーション</h2>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
            <thead>
            <tr>
                <th className="py-2 px-4 border-b bg-gray-600 text-gray-200 text-left">項目</th>
                <th className="py-2 px-4 border-b bg-gray-600 text-gray-200 text-left">直近実績</th>
                <th className="py-2 px-4 border-b bg-gray-600 text-gray-200 text-left">進行期見込</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4 border-b">EBITDA</td>
                <td className="py-2 px-4 border-b">200</td>
                <td className="py-2 px-4 border-b">250</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">NetDebt</td>
                <td className="py-2 px-4 border-b">300</td>
                <td className="py-2 px-4 border-b">300</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">想定EquityValue</td>
                <td className="py-2 px-4 border-b">900</td>
                <td className="py-2 px-4 border-b">900</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b bg-indigo-100">EV</td>
                <td className="py-2 px-4 border-b bg-indigo-100">1,200</td>
                <td className="py-2 px-4 border-b bg-indigo-100">1,200</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">エントリーマルチプル</td>
                <td className="py-2 px-4 border-b">6.0x</td>
                <td className="py-2 px-4 border-b">4.8x</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">マルチプル業界中央値</td>
                <td className="py-2 px-4 border-b">8.3x</td>
                <td className="py-2 px-4 border-b">8.3x</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">Implied Equity Value</td>
                <td className="py-2 px-4 border-b">1,360</td>
                <td className="py-2 px-4 border-b">1,775</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b bg-indigo-100">Implied EV</td>
                <td className="py-2 px-4 border-b bg-indigo-100">1,660</td>
                <td className="py-2 px-4 border-b bg-indigo-100">2,075</td>
            </tr>
            </tbody>
        </table>
        </div>

        <Link href="/" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 mt-6 text-center block">
          戻る
        </Link>
      </div>
    </div>
  );
};

const ReportPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReportPageContent />
    </Suspense>
  );
};

export default ReportPage;