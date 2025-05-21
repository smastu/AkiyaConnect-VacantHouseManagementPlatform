import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import { Calendar, Users, MessageSquare, Clock, AlertTriangle } from 'lucide-react';

interface Reservation {
  id: string;
  title: string;
  start: string;
  end: string;
  userId: string;
  userName: string;
  backgroundColor?: string;
  borderColor?: string;
}

// 物件ごとの予約データ
const propertyReservations: { [key: string]: Reservation[] } = {
  "1": [ // 鎌倉の古民家
    {
      id: '1',
      title: '山田太郎の予約',
      start: '2024-01-10',
      end: '2024-01-12',
      userId: '1',
      userName: '山田太郎',
      backgroundColor: '#818cf8',
      borderColor: '#6366f1'
    },
    {
      id: '2',
      title: '佐藤花子の予約',
      start: '2024-01-15',
      end: '2024-01-17',
      userId: '2',
      userName: '佐藤花子',
      backgroundColor: '#4ade80',
      borderColor: '#22c55e'
    },
    {
      id: '3',
      title: '鈴木一郎の予約',
      start: '2024-02-05',
      end: '2024-02-07',
      userId: '3',
      userName: '鈴木一郎',
      backgroundColor: '#fb923c',
      borderColor: '#f97316'
    }
  ],
  "2": [ // 京都町家
    {
      id: '4',
      title: '田中美咲の予約',
      start: '2024-01-20',
      end: '2024-01-23',
      userId: '4',
      userName: '田中美咲',
      backgroundColor: '#f472b6',
      borderColor: '#ec4899'
    },
    {
      id: '5',
      title: '山本健一の予約',
      start: '2024-02-01',
      end: '2024-02-03',
      userId: '5',
      userName: '山本健一',
      backgroundColor: '#60a5fa',
      borderColor: '#3b82f6'
    },
    {
      id: '6',
      title: '中村優子の予約',
      start: '2024-02-10',
      end: '2024-02-14',
      userId: '6',
      userName: '中村優子',
      backgroundColor: '#a78bfa',
      borderColor: '#8b5cf6'
    }
  ],
  "3": [ // 軽井沢コテージ
    {
      id: '7',
      title: '高橋誠の予約',
      start: '2024-01-25',
      end: '2024-01-28',
      userId: '7',
      userName: '高橋誠',
      backgroundColor: '#fbbf24',
      borderColor: '#f59e0b'
    },
    {
      id: '8',
      title: '渡辺麗子の予約',
      start: '2024-02-15',
      end: '2024-02-18',
      userId: '8',
      userName: '渡辺麗子',
      backgroundColor: '#34d399',
      borderColor: '#10b981'
    },
    {
      id: '9',
      title: '小林太郎の予約',
      start: '2024-02-23',
      end: '2024-02-25',
      userId: '9',
      userName: '小林太郎',
      backgroundColor: '#f472b6',
      borderColor: '#ec4899'
    }
  ]
};

// 物件ごとのチャットデータ
const propertyChats: { [key: string]: Array<{ userName: string; message: string; time: string; borderColor: string }> } = {
  "1": [
    {
      userName: "山田太郎",
      message: "2/5-7の予約を交換できる方いませんか？",
      time: "2時間前",
      borderColor: "border-indigo-500"
    },
    {
      userName: "佐藤花子",
      message: "私の1/15-17と交換可能です。",
      time: "1時間前",
      borderColor: "border-green-500"
    },
    {
      userName: "鈴木一郎",
      message: "2/5以降で予約可能な日を探しています。",
      time: "30分前",
      borderColor: "border-orange-500"
    }
  ],
  "2": [
    {
      userName: "田中美咲",
      message: "1/20-23の期間、どなたか譲っていただけませんか？",
      time: "3時間前",
      borderColor: "border-pink-500"
    },
    {
      userName: "山本健一",
      message: "2/1-3の予約を交換できる方いましたら。",
      time: "2時間前",
      borderColor: "border-blue-500"
    },
    {
      userName: "中村優子",
      message: "2/10-14で予約しました。長期滞在の方すみません。",
      time: "1時間前",
      borderColor: "border-purple-500"
    }
  ],
  "3": [
    {
      userName: "高橋誠",
      message: "1/25-28は雪まつりの時期ですね。楽しみです。",
      time: "4時間前",
      borderColor: "border-yellow-500"
    },
    {
      userName: "渡辺麗子",
      message: "2/15-18の予約、キャンセル待ち募集中です。",
      time: "2時間前",
      borderColor: "border-emerald-500"
    },
    {
      userName: "小林太郎",
      message: "2/23-25で予約できました！",
      time: "1時間前",
      borderColor: "border-pink-500"
    }
  ]
};

const PropertyReservationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 物件IDに基づいて予約データを取得
  const reservations = id ? propertyReservations[id] || [] : [];
  const chats = id ? propertyChats[id] || [] : [];

  // サンプルデータ
  const shareRatio = 0.15; // 15%の出資比率
  const maxDaysPerYear = Math.floor(365 * shareRatio); // 出資比率に応じた年間予約可能日数
  const remainingDays = 25; // 残り予約可能日数

  const handleDateClick = (arg: { date: Date }) => {
    setSelectedDate(arg.date);
    setShowReservationModal(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">予約管理</h1>
          <p className="text-gray-600">物件ID: {id}</p>
        </div>

        {/* 予約状況サマリー */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">出資比率</h3>
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-2xl font-bold">{(shareRatio * 100).toFixed(1)}%</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">年間予約可能日数</h3>
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold">{maxDaysPerYear}日</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">残り予約可能日数</h3>
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-2xl font-bold">{remainingDays}日</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">予約当選確率</h3>
              <AlertTriangle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">{(shareRatio * 100).toFixed(1)}%</p>
          </div>
        </div>

        {/* カレンダーとチャット */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-6">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  locale={jaLocale}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                  }}
                  events={reservations}
                  dateClick={handleDateClick}
                  height="auto"
                  eventContent={(eventInfo) => {
                    return (
                      <div className="p-1">
                        <div className="text-xs font-semibold">{eventInfo.event.title}</div>
                        <div className="text-xs">{eventInfo.timeText}</div>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>

          {/* チャット */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">出資者チャット</h2>
                <MessageSquare className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {chats.map((chat, index) => (
                  <div key={index} className={`border-l-4 ${chat.borderColor} pl-3 py-2`}>
                    <p className="font-semibold text-gray-800">{chat.userName}</p>
                    <p className="text-sm text-gray-600">{chat.message}</p>
                    <p className="text-xs text-gray-400">{chat.time}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <textarea
                  className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={3}
                  placeholder="メッセージを入力..."
                ></textarea>
                <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  送信
                </button>
              </div>
            </div>

            {/* 予約ルール */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">予約ルール</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• 出資比率に応じて年間予約可能日数が決まります</li>
                <li>• 予約は3ヶ月前から可能です</li>
                <li>• 連続予約は最大7日間まで</li>
                <li>• キャンセルは2週間前まで可能です</li>
                <li>• 予約の譲渡・交換は出資者間で可能です</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 予約モーダル */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">新規予約</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  予約日
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={selectedDate?.toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  宿泊日数
                </label>
                <select className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>1泊2日</option>
                  <option>2泊3日</option>
                  <option>3泊4日</option>
                  <option>4泊5日</option>
                  <option>5泊6日</option>
                  <option>6泊7日</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  メモ
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowReservationModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                キャンセル
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                予約する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyReservationPage;