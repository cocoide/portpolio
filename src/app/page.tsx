import { Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900">大島 一輝</h1>
          <p className="text-gray-600 mt-1">Software Engineer</p>
          <div className="flex gap-4 mt-4 text-sm text-gray-600">
            <a
              href="mailto:kauzki527@gmail.com"
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
            >
              <Mail size={16} />
              kauzki527@gmail.com
            </a>
            <a
              href="https://github.com/cocoide"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
            >
              <ExternalLink size={14} />
              GitHub
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed">
            AI Agent開発を軸に、フロントエンドからバックエンド・インフラまで一貫して対応。
            ビジネス要件を理解した上でのUI/UX設計と、GCPを用いた非機能要件を考慮したシステム構築が可能。
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            スキル
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex">
              <span className="w-32 text-gray-500 shrink-0">言語</span>
              <span className="text-gray-700">TypeScript, Python, Go</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-500 shrink-0">AI/LLM</span>
              <span className="text-gray-700">Anthropic SDK, LangGraph, OpenAI, HeyGen</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-500 shrink-0">インフラ</span>
              <span className="text-gray-700">GCP</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            開発実績
          </h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <div>
              <h3 className="font-medium text-gray-900">
                広告代理店向け 広告制作AI Agent
              </h3>
              <p className="text-sm text-gray-500 mt-1">設計・実装担当</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                広告代理店向けの広告制作効率化ツール。クリエイティビティを損なわず、
                代理店特有の業務フローに沿った制作支援を実現。
                対話型UI/UXの設計からAI Agentのロジック設計・技術選定まで担当。
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  Anthropic SDK
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="font-medium text-gray-900">
                高校オープンスクール向け AI Agentアバター
              </h3>
              <p className="text-sm text-gray-500 mt-1">リード / PM兼務</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                HeyGenを用いたリアルタイム対話型アバターの開発。
                中学生向けオープンスクールで校長先生が質問に答える体験を実現。
                現場での反応を見ながらシステムプロンプトや内部設計を改善。
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  HeyGen
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div>
              <h3 className="font-medium text-gray-900">営業代行 AI Agent</h3>
              <p className="text-sm text-gray-500 mt-1">バックエンド / インフラ担当</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                LangGraphを用いた対話型リード獲得システム。ヒアリングを通じてリストを生成する体験を実装。
                月間数十万件のリード処理に対応するバックエンド・インフラを構築。
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  LangGraph
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  Python
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  GCP
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div>
              <h3 className="font-medium text-gray-900">クラウドRPA基盤</h3>
              <p className="text-sm text-gray-500 mt-1">テックリード</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                クラウド上でRPAを実行するための基盤開発。
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  GCP
                </span>
              </div>
            </div>

            {/* Project 5 */}
            <div>
              <h3 className="font-medium text-gray-900">ATS管理自動化SaaS</h3>
              <p className="text-sm text-gray-500 mt-1">テックリード</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                採用管理システム（ATS）の運用を自動化するSaaSの基盤開発。
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  GCP
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Career */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            経歴
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex">
              <span className="w-36 text-gray-500 shrink-0">2026/1 - 3</span>
              <div>
                <p className="text-gray-900">zokujin株式会社</p>
              </div>
            </div>
            <div className="flex">
              <span className="w-36 text-gray-500 shrink-0">2024/1 - 2026/3</span>
              <div>
                <p className="text-gray-900">株式会社Michibiku Group</p>
                <p className="text-gray-500">テックリード（1年間）</p>
              </div>
            </div>
            <div className="flex">
              <span className="w-36 text-gray-500 shrink-0">2023/10 - 2024/1</span>
              <div>
                <p className="text-gray-900">カナリー株式会社</p>
                <p className="text-gray-500">バックエンド（長期インターン）</p>
              </div>
            </div>
            <div className="flex">
              <span className="w-36 text-gray-500 shrink-0">2023/7 - 10</span>
              <div>
                <p className="text-gray-900">GO株式会社</p>
                <p className="text-gray-500">バックエンド（長期インターン）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            強み
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">-</span>
              <span>AI Agent開発における設計から実装までの一貫した対応</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">-</span>
              <span>ビジネス要件を理解した上でのUI/UX設計</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">-</span>
              <span>非機能要件を意識したバックエンド・インフラ構築（GCP）</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
