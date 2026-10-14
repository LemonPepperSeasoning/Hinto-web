// The privacy policy, worded from how the app actually behaves (see website.md in the project notes).
// If the app starts sending anything anywhere (for example the Claude card maker returns), update this first.
export const privacyUpdated = '2026-10-15';
export const contactEmail = 'lemonpepperstudioco@gmail.com';

type Section = { heading: string; body: string[] };
export const privacy: Record<'en' | 'ja', { title: string; intro: string; updated: string; sections: Section[] }> = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: 15 October 2026',
    intro:
      'Oboeru is a flashcard app for iPhone made by Lemon Pepper Studio. In short: there is no account, no server and no tracking. Your cards and your study history stay on your iPhone.',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'Nothing. Oboeru has no account or sign-in, no analytics, no advertising and no tracking. We do not run a server that receives your data, and we do not sell or share data with anyone.',
        ],
      },
      {
        heading: 'What stays on your iPhone',
        body: [
          'Your decks, cards, pictures and recordings, the pages you scan or import, your study history and streak, and your settings are stored on your iPhone only.',
          'They are included in your iPhone’s iCloud backup if you use it. That backup is handled by Apple under Apple’s privacy policy; we cannot see it.',
        ],
      },
      {
        heading: 'Camera, photos, microphone and notifications',
        body: [
          'Oboeru asks for the camera to scan pages and for the microphone to record audio on a card. Photos are chosen with Apple’s photo picker, so Oboeru sees only the pictures you pick, not your library. It asks to send notifications only if you turn on the daily reminder. What these features capture is used only inside the app on your iPhone.',
        ],
      },
      {
        heading: 'Making cards with AI',
        body: [
          'On an iPhone with Apple Intelligence, Oboeru can read your pages with Apple’s model on the device. The pages do not leave your iPhone. You can turn this off in Settings → AI card maker.',
          'Without it, Oboeru makes cards with its own rules and a dictionary (JMdict) on your iPhone.',
        ],
      },
      {
        heading: 'What leaves your iPhone, and only when you choose',
        body: [
          'Deck files: when you share a deck, the file you send contains the deck’s cards, its pictures and audio, and your display name as its creator. Your study history is never included.',
          'Debug info: Settings → Support → Share debug info builds a file with the app version, iPhone model, crash reports and recent app logs, and opens the share sheet. Card text and deck names are left out. It is sent only if you choose to send it.',
        ],
      },
      {
        heading: 'Children',
        body: ['Oboeru collects no personal information from anyone, including children.'],
      },
      {
        heading: 'Changes',
        body: [
          'If this policy changes, for example because the app gains a feature that sends data somewhere, we will update this page and its date before that version of the app is released.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about privacy: ${contactEmail}`],
      },
    ],
  },
  ja: {
    title: 'プライバシーポリシー',
    updated: '最終更新日：2026年10月15日',
    intro:
      'Oboeruは、Lemon Pepper Studioが提供するiPhone用のフラッシュカードアプリです。かんたんに言うと、アカウントもサーバーもトラッキングもありません。カードと学習履歴は、あなたのiPhoneの中に保存されます。',
    sections: [
      {
        heading: '収集する情報',
        body: [
          'ありません。Oboeruにはアカウントやログイン、アクセス解析、広告、トラッキングはありません。データを受け取るサーバーも運営しておらず、データを販売したり第三者と共有したりすることもありません。',
        ],
      },
      {
        heading: 'iPhoneの中に保存されるもの',
        body: [
          'デッキ、カード、画像や録音、スキャン・読み込んだページ、学習履歴と連続記録、設定は、すべてあなたのiPhoneの中にだけ保存されます。',
          'iCloudバックアップを使っている場合は、そのバックアップに含まれます。バックアップはAppleのプライバシーポリシーのもとでAppleが管理しており、私たちが見ることはできません。',
        ],
      },
      {
        heading: 'カメラ・写真・マイク・通知',
        body: [
          'ページのスキャンにカメラを、カードの音声の録音にマイクを使います。写真はAppleの写真ピッカーで選ぶため、Oboeruが見られるのはあなたが選んだ写真だけで、ライブラリ全体ではありません。通知は、毎日のリマインダーをオンにしたときだけ許可をお願いします。これらで取得したものは、iPhoneの中のアプリ内でのみ使われます。',
        ],
      },
      {
        heading: 'AIによるカード作成',
        body: [
          'Apple Intelligenceに対応したiPhoneでは、iPhone上のAppleのモデルでページを読み取れます。ページがiPhoneの外に出ることはありません。設定 → AIカード作成でオフにできます。',
          '使わない場合は、iPhone内のOboeru独自のルールと辞書（JMdict）でカードを作ります。',
        ],
      },
      {
        heading: 'iPhoneの外に出るもの（あなたが選んだときだけ）',
        body: [
          'デッキファイル：デッキを共有すると、送るファイルにはカード、画像と音声、作成者としての表示名が含まれます。学習履歴は含まれません。',
          'デバッグ情報：設定 → サポート → デバッグ情報を共有 で、アプリのバージョン、iPhoneの機種、クラッシュレポート、最近のアプリのログをまとめたファイルを作り、共有シートを開きます。カードの内容やデッキ名は含まれません。あなたが送ったときだけ送信されます。',
        ],
      },
      {
        heading: 'お子さまについて',
        body: ['Oboeruは、お子さまを含め、どなたの個人情報も収集しません。'],
      },
      {
        heading: '変更について',
        body: [
          'たとえばデータを外部に送る機能が加わるなど、このポリシーを変更する場合は、そのバージョンのアプリを公開する前にこのページと日付を更新します。',
        ],
      },
      {
        heading: 'お問い合わせ',
        body: [`プライバシーに関するお問い合わせ：${contactEmail}`],
      },
    ],
  },
};
