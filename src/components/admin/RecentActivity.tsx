
import { useEffect, useState } from "react";
import { getRealUserData } from "@/lib/imageUtils";

type Activity = {
  userId: string;
  userEmail: string;
  action: string;
  time: string;
};

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  
  useEffect(() => {
    // Get real user data
    const users = getRealUserData();
    
    if (users.length > 0) {
      // Actions based on user subscription type
      const actions = {
        free: ['Viewed color analysis', 'Started style quiz', 'Browsed seasonal recommendations'],
        premium: ['Completed color analysis', 'Added items to wishlist', 'Viewed makeup recommendations'],
        vip: ['Scheduled consultation', 'Customized wardrobe plan', 'Received seasonal update']
      };
      
      // Time frames
      const timeFrames = ['Just now', '2 minutes ago', '10 minutes ago', '30 minutes ago', '1 hour ago', '2 hours ago', '3 hours ago', 'Yesterday', '2 days ago'];
      
      // Create activities based on real users
      const recentActivities = users.slice(0, 5).map((user, i) => {
        const actionSet = actions[user.subscription as keyof typeof actions] || actions.free;
        const actionIndex = Math.floor(Math.random() * actionSet.length);
        
        return {
          userId: user.id,
          userEmail: user.email,
          action: actionSet[actionIndex],
          time: timeFrames[Math.min(i, timeFrames.length - 1)]
        };
      });
      
      setActivities(recentActivities);
    } else {
      // Fallback to demo data if no real users
      setActivities([
        { userId: 'user-237', userEmail: 'demo1@example.com', action: 'Completed color analysis', time: '2 minutes ago' },
        { userId: 'user-238', userEmail: 'demo2@example.com', action: 'Started subscription', time: '1 hour ago' },
        { userId: 'user-239', userEmail: 'demo3@example.com', action: 'Completed color analysis', time: '3 hours ago' },
        { userId: 'user-240', userEmail: 'demo4@example.com', action: 'Started subscription', time: 'Yesterday' },
        { userId: 'user-241', userEmail: 'demo5@example.com', action: 'Completed color analysis', time: '2 days ago' }
      ]);
    }
  }, []);
  
  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-medium text-lg mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
            <div>
              <p className="font-medium">{activity.userEmail}</p>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
            </div>
            <div className="text-sm text-muted-foreground">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
