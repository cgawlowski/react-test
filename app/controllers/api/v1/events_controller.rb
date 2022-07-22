class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.all.order(brand: :asc)
    render json: @events
  end

  # GET /events/1
  # GET /events/1.json
  def show
    if @event
      render json: @event
    else
      render json: @event.errors
    end
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)


    if @event.save
      render json: @event
    else
      render json: @event.errors
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy

    render json: { notice: 'event was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.permit(:name, :description, :start_date, :end_date)
    end
end
