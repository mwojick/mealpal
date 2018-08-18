class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_login
    render json: ["Unauthorized"] unless logged_in?
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

end
