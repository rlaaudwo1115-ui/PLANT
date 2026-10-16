// Supabase Client 초기화 설정
const SUPABASE_URL = "https://qpadvkfnahiwrikmqghm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwYWR2a2ZuYWhpd3Jpa21xZ2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDM2NzMsImV4cCI6MjEwNzcxOTY3M30.yU20-mjGdCevJu2-l4LHpm3n_R6_ft7q28YQ9U5kLPY";

// CDN에서 로드된 supabase 라이브러리를 통해 클라이언트 생성
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

